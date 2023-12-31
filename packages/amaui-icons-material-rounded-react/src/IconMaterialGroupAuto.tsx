import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAuto'

      short_name='GroupAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-50q0-31 16-56.5t44-39.5q52-26 107.5-40T361-320q58 0 113.5 14T581-266q27 14 43 39.5t16 56.5v50q0 17-11.5 28.5T600-80H120Zm680 0h-99q9-7 14-17.5t5-23.5v-59q0-38-19.5-71T652-309q32 8 63.5 17.5T776-267q26 14 45 36t19 51v60q0 17-11.5 28.5T800-80ZM360-360q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm340-140q0 58-41 99t-99 41q-8 0-14.5-.5T532-363q25-29 36.5-64t11.5-73q0-38-11.5-73T532-637q7-2 13.5-2.5t14.5-.5q58 0 99 41t41 99ZM160-160h400v-9q0-8-4.5-15.5T543-196q-43-22-89-33t-94-11q-48 0-94 11t-89 33q-8 4-12.5 11t-4.5 16v9Zm200-280q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm380-120q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560ZM360-160Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialGroupAuto.displayName = 'AmauiIconMaterialGroupAuto';

export default IconMaterialGroupAuto;
