import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityKeyW100'

      short_name='SecurityKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-92v-177h-70v-599h376v599h-70v177H362Zm118-393q35 0 59.5-24.208Q564-533.417 564-568q0-35.417-24.5-60.208Q515-653 480-653t-59.5 24.792Q396-603.417 396-568q0 34.583 24.5 58.792Q445-485 480-485Zm-90 365h181v-149H390v149Zm-70-177h320v-543H320v543Zm160-216q-23 0-39-15.812-16-15.813-16-39.188 0-23 15.812-40 15.813-17 39.188-17 23 0 40 17t17 40q0 23-17 39t-40 16ZM320-297h320-320Z"/>
    </Icon>
  );
});

IconMaterialSecurityKeyW100.displayName = 'AmauiIconMaterialSecurityKeyW100';

export default IconMaterialSecurityKeyW100;
