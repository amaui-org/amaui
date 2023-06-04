import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 18h6.9q.325 0 .55-.212.225-.213.25-.538l.525-6.65h-9.55l.525 6.65q.025.325.25.538.225.212.55.212ZM7.175 9.9h9.65L17 7.8l-2.625-2.575q-.125-.125-.262-.175-.138-.05-.288-.05h-3.65q-.15 0-.288.05-.137.05-.262.175L7 7.8Zm-.65.7-3.4-3.175Q3 7.35 3 7.212q0-.137.1-.262t.238-.15q.137-.025.262.1l2.85 2.7-.15-2.05 2.8-2.8q.2-.2.488-.325.287-.125.587-.125h3.65q.3 0 .588.125.287.125.487.325l2.8 2.8-.15 2.05 2.85-2.7q.125-.125.263-.1.137.025.237.15.1.125.1.262 0 .138-.125.213l-3.4 3.175Zm2.025 8.1q-.575 0-1.012-.4-.438-.4-.488-.975L6.525 10.6h10.95l-.525 6.725q-.05.575-.487.975-.438.4-1.013.4ZM12 9.9Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100.displayName = 'AmauiIconMaterialTakeoutDiningW100';

export default IconMaterialTakeoutDiningW100;
