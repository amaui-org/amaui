import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAutoFilled'

      short_name='GroupAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-90q0-31 16-56.5t44-39.5q52-26 107.5-40T361-320q58 0 113.5 14T581-266q27 14 43 39.5t16 56.5v90H80Zm640 0v-100q0-38-19.5-71T652-309q32 8 63.5 17.5T776-267q26 14 45 36t19 51v100H720ZM360-360q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm340-140q0 58-41 99t-99 41q-8 0-14.5-.5T532-363q25-29 36.5-64t11.5-73q0-38-11.5-73T532-637q7-2 13.5-2.5t14.5-.5q58 0 99 41t41 99Zm40-60q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560Z"/>
    </Icon>
  );
});

IconMaterialGroupAutoFilled.displayName = 'AmauiIconMaterialGroupAutoFilled';

export default IconMaterialGroupAutoFilled;
