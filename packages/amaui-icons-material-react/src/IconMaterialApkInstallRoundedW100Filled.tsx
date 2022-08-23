import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApkInstallRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallRoundedW100Filled'
      short_name='ApkInstall'

      {...props}
    >
      <path d="m18.1 20.7-3.075-3.1.475-.5 2.25 2.25v-5.075h.7v5.075l2.25-2.225.475.475Zm-13.3 0q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h7.85l4.05 4.05v5.275h-2.95V20.7Zm7.5-13H16L12.3 4ZM6.25 18h7.5q-.075-.925-.55-1.688-.475-.762-1.275-1.212l.725-1.275q.025-.075-.012-.163-.038-.087-.113-.137-.075-.05-.15-.025t-.125.1l-.725 1.3q-.35-.15-.737-.225Q10.4 14.6 10 14.6t-.775.075q-.375.075-.75.225l-.725-1.3q-.05-.075-.137-.1-.088-.025-.163.025-.025 0-.075.3L8.1 15.1q-.8.45-1.288 1.212-.487.763-.562 1.688Zm2.075-1.125q-.15 0-.263-.113-.112-.112-.112-.262 0-.15.112-.262.113-.113.263-.113.15 0 .25.113.1.112.1.262 0 .15-.1.262-.1.113-.25.113Zm3.375 0q-.15 0-.262-.113-.113-.112-.113-.262 0-.15.113-.262.112-.113.262-.113.15 0 .263.113.112.112.112.262 0 .15-.112.262-.113.113-.263.113Z"/>
    </Icon>
  );
});

IconMaterialApkInstallRoundedW100Filled.displayName = 'AmauiIconMaterialApkInstallRoundedW100Filled';

export default IconMaterialApkInstallRoundedW100Filled;
