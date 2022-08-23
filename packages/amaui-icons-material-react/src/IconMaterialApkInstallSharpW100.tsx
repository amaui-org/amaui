import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApkInstallSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallSharpW100'
      short_name='ApkInstall'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h7.85l4.05 4.05v5.275H16V7.7h-3.7V4H4.8q-.3 0-.55.25Q4 4.5 4 4.8v14.4q0 .3.25.55.25.25.55.25h8.95v.7ZM4 20V4v16Zm2.25-2q.075-.925.562-1.688Q7.3 15.55 8.1 15.1l-.725-1.275.075-.3q.075-.05.163-.025.087.025.137.1l.725 1.3q.375-.15.75-.225Q9.6 14.6 10 14.6t.788.075q.387.075.737.225l.725-1.3q.025-.025.275-.075.075.05.113.137.037.088-.013.163l-.7 1.275q.8.45 1.275 1.212.475.763.55 1.688Zm2.075-1.125q.15 0 .25-.113.1-.112.1-.262 0-.15-.1-.262-.1-.113-.25-.113t-.263.113q-.112.112-.112.262 0 .15.112.262.113.113.263.113Zm3.375 0q.15 0 .263-.113.112-.112.112-.262 0-.15-.112-.262-.113-.113-.263-.113-.15 0-.262.113-.113.112-.113.262 0 .15.113.262.112.113.262.113Zm6.4 3.825-3.075-3.1.475-.5 2.25 2.25v-5.075h.7v5.075l2.25-2.225.475.475Z"/>
    </Icon>
  );
});

IconMaterialApkInstallSharpW100.displayName = 'AmauiIconMaterialApkInstallSharpW100';

export default IconMaterialApkInstallSharpW100;
