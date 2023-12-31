import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAlertFilled'

      short_name='PersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-520q-17 0-28.5-11.5T760-560q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520Zm0-120q-17 0-28.5-11.5T760-680v-120q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v120q0 17-11.5 28.5T800-640ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240Z"/>
    </Icon>
  );
});

IconMaterialPersonAlertFilled.displayName = 'AmauiIconMaterialPersonAlertFilled';

export default IconMaterialPersonAlertFilled;
