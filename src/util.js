'use strict';

function removeDuplicates(data) {
	return data.filter((value, index) => data.indexOf(value) === index);
}

module.exports = {
	removeDuplicates
};
