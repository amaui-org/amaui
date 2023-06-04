import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbShadeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeW100'

      short_name='WbShade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.025 18.85-4.95-4.95q-.125-.125-.125-.25t.125-.25q.125-.125.263-.113.137.013.237.113l4.95 4.95q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Zm-4.35.15q-.325 0-.537-.212-.213-.213-.213-.538V17l2 2Zm-9 0q-.325 0-.537-.212-.213-.213-.213-.538V9.5H4.8q-.275 0-.388-.238-.112-.237.088-.437l3.15-3.15q.05-.05.275-.1.025 0 .275.1l3.15 3.15q.2.2.088.437-.113.238-.388.238h-.125v8.75q0 .325-.212.538-.213.212-.538.212Zm.55-4.3h3.4V9.5h-3.4Z"/>
    </Icon>
  );
});

IconMaterialWbShadeW100.displayName = 'AmauiIconMaterialWbShadeW100';

export default IconMaterialWbShadeW100;
