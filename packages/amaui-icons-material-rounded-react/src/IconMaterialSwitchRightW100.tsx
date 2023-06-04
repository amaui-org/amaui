import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightW100'

      short_name='SwitchRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 15.35 18.05 12 14.7 8.65Zm.575.4q-.35.35-.812.163-.463-.188-.463-.688v-6.45q0-.5.463-.688.462-.187.812.163l3.225 3.225q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25Zm-6.55 0L5.5 12.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L8.725 8.25q.35-.35.813-.163.462.188.462.688v6.45q0 .5-.462.688-.463.187-.813-.163Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightW100.displayName = 'AmauiIconMaterialSwitchRightW100';

export default IconMaterialSwitchRightW100;
