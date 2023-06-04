import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftW100'

      short_name='SwitchLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 15.35v-6.7L5.95 12Zm-.575.4L5.5 12.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L8.725 8.25q.35-.35.813-.163.462.188.462.688v6.45q0 .5-.462.688-.463.187-.813-.163Zm6.55 0q-.35.35-.812.163-.463-.188-.463-.688v-6.45q0-.5.463-.688.462-.187.812.163l3.225 3.225q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftW100.displayName = 'AmauiIconMaterialSwitchLeftW100';

export default IconMaterialSwitchLeftW100;
