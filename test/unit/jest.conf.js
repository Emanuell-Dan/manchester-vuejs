const path = require('path');

module.exports = {
	testURL: 'http://localhost',
	rootDir: path.resolve(__dirname, '../../'),
	moduleFileExtensions: [
		'js',
		'json',
		'vue'
	],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/mocks/staticAsset.js',
		'^@/(.*)$': '<rootDir>/$1'
	},
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
	},
	transformIgnorePatterns: [
		'node_modules/(?!jest-test)' + 'node_modules/(?!(jest-test))'
	],
	snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
	setupFiles: ['<rootDir>/test/unit/setup'],
	reporters: [
		'default', 'jest-junit'
	],
	coverageDirectory: '<rootDir>/build/report/coverage',
	collectCoverageFrom: [
		'**/*.{js,vue}',
		'!**/node_modules/**'
	],
	modulePaths: [
		'<rootDir>'
	],
	coverageThreshold: {
		global: {
			branches: 96.5,
			functions: 98,
			lines: 99,
			statements: 99
		}
	}
};
