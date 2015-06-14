var esprima = require('esprima'),
	escodegen = require('escodegen'),
	estraverse = require('estraverse');

module.exports = function (stringFromMarkup) {
	var ast = esprima.parse(stringFromMarkup);
	estraverse.replace(ast, {
		enter: function (node, parent) {
			if (node.type === 'ArrowFunctionExpression') {
				return rewriteArrowFunctionExpressionNode(node);
			}
		}
	})
	return escodegen.generate(ast, { format: { newline: '', indent: { style: '' } } });
}

function rewriteArrowFunctionExpressionNode(node) {
	return {
		type: 'CallExpression',
		arguments: [
			{
				type: 'ThisExpression'
			}
		],
		callee: {
			type: 'MemberExpression',
			object: {
				type: 'FunctionExpression',
				params: node.params,
				body: {
					type: 'BlockStatement',
					body: [
						{
							type: 'ReturnStatement',
							argument: {
								type: 'CallExpression',
								arguments: [
									node.body
								],
								callee: {
									type: 'MemberExpression',
									object: {
										type: 'Identifier',
										name: 'ko'
									},
									property: {
										type: 'Identifier',
										name: 'unwrap'
									}
								}
							}
						}
					]
				}
			},
			property: {
				type: 'Identifier',
				name: 'bind'
			}
		}
	};
}
