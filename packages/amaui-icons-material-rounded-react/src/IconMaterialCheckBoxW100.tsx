import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19Zm4.8-4q.15 0 .275-.05.125-.05.25-.175l5.45-5.45q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125L10.6 14.3l-2.625-2.625q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l2.575 2.575q.125.125.25.175.125.05.275.05ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100.displayName = 'AmauiIconMaterialCheckBoxW100';

export default IconMaterialCheckBoxW100;
