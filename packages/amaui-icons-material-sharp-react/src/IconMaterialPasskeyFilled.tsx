import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyFilled'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm290 360-50-60v-147q-36-14-58-44.5T600-440q0-50 35-85t85-35q50 0 85 35t35 85q0 38-22 68.5T760-327v7l40 40-40 40 40 40-70 80Zm-10-260q25 0 42.5-17.5T780-440q0-25-17.5-42.5T720-500q-25 0-42.5 17.5T660-440q0 25 17.5 42.5T720-380Zm-199-54q2 46 21.5 86.5T600-281v121H120v-111q0-34 17-63t47-44q60-30 124.5-46T440-440q20 0 40.5 1.5T521-434Z"/>
    </Icon>
  );
});

IconMaterialPasskeyFilled.displayName = 'AmauiIconMaterialPasskeyFilled';

export default IconMaterialPasskeyFilled;
