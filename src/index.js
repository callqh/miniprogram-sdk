import tracker from './tracker';
import reporter from './reporter';

// 手动埋点方法
export const $ta = {
	track: reporter.track.bind(reporter),
};

export default tracker;
