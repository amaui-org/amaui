import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoW100Filled'

      short_name='FlashAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.05 11q-.2 0-.3-.137-.1-.138-.025-.338l3-7.6q.05-.15.213-.263.162-.112.337-.112.175 0 .338.112.162.113.212.263L20.85 10.5q.075.2-.025.35-.1.15-.325.15-.1 0-.2-.062-.1-.063-.15-.163l-1-2.475H15.4l-1 2.475q-.05.1-.15.163-.1.062-.2.062Zm1.6-3.35h3.25l-1.6-4.1h-.1ZM6.9 20.6q-.15.275-.45.188-.3-.088-.3-.388V14h-1.9q-.325 0-.537-.213-.213-.212-.213-.537v-9q0-.325.213-.538.212-.212.537-.212h6.85q.425 0 .638.337.212.338.037.713l-3.025 6.8h2.2q.425 0 .65.375.225.375 0 .75Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoW100Filled.displayName = 'AmauiIconMaterialFlashAutoW100Filled';

export default IconMaterialFlashAutoW100Filled;
