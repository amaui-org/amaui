import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialogsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialogsFilled'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h240q17 0 28.5-11.5T640-360v-240q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600v240q0 17 11.5 28.5T360-320ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialDialogsFilled.displayName = 'AmauiIconMaterialDialogsFilled';

export default IconMaterialDialogsFilled;
