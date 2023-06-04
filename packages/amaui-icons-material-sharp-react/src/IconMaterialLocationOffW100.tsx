import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffW100'

      short_name='LocationOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.275 10.475-1.75-1.75q.125-.05.237-.063.113-.012.238-.012.575 0 .963.387.387.388.387.963 0 .125-.012.238-.013.112-.063.237ZM21.3 22.3l-5.125-5.125q-.825 1.05-1.863 2.125-1.037 1.075-2.312 2.2-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-1.05.225-1.963.225-.912.65-1.712L2.25 3.25l.475-.525L21.8 21.8Zm-3.55-7.35q.8-1.35 1.2-2.525.4-1.175.4-2.225 0-3.45-2.225-5.5T12 2.65q-1.35 0-2.575.45T7.2 4.4l.5.5q.875-.75 1.95-1.15 1.075-.4 2.35-.4 2.8 0 4.725 1.912Q18.65 7.175 18.65 10.2q0 .85-.362 1.937-.363 1.088-1.063 2.288ZM12 20.525q1.1-.95 2.013-1.913.912-.962 1.662-1.937L6.05 7.05q-.35.7-.525 1.487-.175.788-.175 1.663 0 1.9 1.75 4.762 1.75 2.863 4.9 5.563Zm-1.125-8.65Zm1.6-2.2Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100.displayName = 'AmauiIconMaterialLocationOffW100';

export default IconMaterialLocationOffW100;
