import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDominoMask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DominoMask'

      short_name='DominoMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-240q-51 0-97.5-18T131-311q-48-45-69.5-106.5T40-545q0-78 38-126.5T189-720q14 0 26.5 2.5T241-710l239 89 239-89q13-5 25.5-7.5T771-720q73 0 111 48.5T920-545q0 66-21.5 127.5T829-311q-37 35-83.5 53T648-240q-66 0-112-30l-46-30h-20l-46 30q-46 30-112 30Zm0-80q37 0 69-17.5t59-42.5h80q27 25 59 42.5t69 17.5q36 0 69.5-12.5T777-371q34-34 48.5-80t14.5-94q0-41-17-68.5T769-640q-3 0-22 4L480-536 213-636q-5-2-10.5-3t-11.5-1q-37 0-54 27t-17 68q0 49 14.5 95t49.5 80q26 25 59 37.5t69 12.5Zm49-60q37 0 58-16.5t21-45.5q0-49-64.5-93.5T239-580q-37 0-58 16.5T160-518q0 49 64.5 93.5T361-380Zm-6-60q-38 0-82.5-25T220-516q5-2 11.5-3.5T245-521q38 0 82.5 25.5T380-444q-5 2-11.5 3t-13.5 1Zm244 61q72 0 136.5-45t64.5-94q0-29-20.5-46T721-581q-72 0-136.5 45T520-442q0 29 21 46t58 17Zm6-61q-7 0-13-1t-11-3q8-26 52.5-51t82.5-25q7 0 13 1t11 3q-8 26-52.5 51T605-440Zm-125-40Z"/>
    </Icon>
  );
});

IconMaterialDominoMask.displayName = 'AmauiIconMaterialDominoMask';

export default IconMaterialDominoMask;
