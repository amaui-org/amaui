import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineWeightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightW100'

      short_name='LineWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.575 15.4q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h10.825q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1ZM6.4 17.75q-.05 0-.1-.05t-.05-.125q0-.075.05-.125t.125-.05H17.6q.05 0 .1.05t.05.125q0 .075-.05.125t-.125.05Zm.35-5.05q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137h10.5q.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15ZM7 9.65q-.325 0-.537-.212-.213-.213-.213-.538V7q0-.325.213-.537.212-.213.537-.213h10q.325 0 .538.213.212.212.212.537v1.9q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialLineWeightW100.displayName = 'AmauiIconMaterialLineWeightW100';

export default IconMaterialLineWeightW100;
