import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightOffFilled'

      short_name='LightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm218-296L274-798q41-38 93.5-60T480-880q125 0 212.5 87.5T780-580q0 71-25 121.5T698-376Zm-172 56H330q-69-41-109.5-110T180-580q0-20 2.5-39t7.5-37L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L526-320ZM360-200q-17 0-28.5-11.5T320-240q0-17 11.5-28.5T360-280h246q17 0 28.5 11.5T646-240q0 17-11.5 28.5T606-200H360Z"/>
    </Icon>
  );
});

IconMaterialLightOffFilled.displayName = 'AmauiIconMaterialLightOffFilled';

export default IconMaterialLightOffFilled;
