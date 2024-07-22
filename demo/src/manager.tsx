import { uuid } from 'aidly';
import ReactDOM from 'react-dom/client';
import { type Manager, create } from 'danmu';
import type { Statuses, DanmakuValue } from '@/types';
import { DanmakuBox } from '@/components/danmu/danmaku';

export const initManager = () => {
  const manager = create<DanmakuValue, Statuses>({
    trackHeight: 40,
    times: [4000, 7000],
    plugin: {
      init(manager) {
        'shadow shadow-slate-300'.split(' ').forEach((c) => {
          manager.box.node.classList.add(c);
        });
      },
      $createNode(d) {
        if (!d.node) return;
        ReactDOM.createRoot(d.node).render(
          <DanmakuBox manager={manager} danmaku={d} />,
        );
      },
    },
  });
  return manager;
};

export const mock = (manager: Manager<DanmakuValue>) => {
  const list = [
    '哇塞！',
    '不可思议！',
    '这也太厉害了吧！',
    '惊呆了！',
    '太神奇了！',
    '这是什么操作？',
    '我看到了什么？',
    '这是什么原理？',
    '我有点看不懂了。',
    '这是什么操作？',
  ];
  setInterval(() => {
    for (const content of list) {
      manager.push({
        id: uuid(),
        value: {
          content,
          isSelf: false,
        },
      });
    }
  }, 1200);
};
