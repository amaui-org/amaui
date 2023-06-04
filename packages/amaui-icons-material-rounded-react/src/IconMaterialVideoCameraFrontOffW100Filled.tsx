import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100Filled'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.5 14.6-2.1-2.1v2.25L7.95 5.3h7.95q.65 0 1.075.425.425.425.425 1.075v4.7l2.1-2.1q.175-.175.413-.088.237.088.237.338v4.7q0 .25-.237.338-.238.087-.413-.088Zm-.7 5.4L3.2 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.6 15.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM5.15 5.35l12.2 12.2q-.125.5-.513.825-.387.325-.937.325H5.5q-.65 0-1.075-.425Q4 17.85 4 17.2V6.8q0-.55.325-.938.325-.387.825-.512Zm2.375 9.75h6.2v-.05q0-.7-.887-1.175-.888-.475-2.213-.475-1.325 0-2.212.475-.888.475-.888 1.175Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100Filled.displayName = 'AmauiIconMaterialVideoCameraFrontOffW100Filled';

export default IconMaterialVideoCameraFrontOffW100Filled;
