import test from 'ava';
import videoExtensions from './';

test(t => {
	t.true(Array.isArray(videoExtensions));
	t.true(videoExtensions.length > 0);
	t.end();
})