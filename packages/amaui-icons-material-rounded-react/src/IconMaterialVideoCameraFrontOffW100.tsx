import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.5 14.6-2.1-2.1v2.25l-.7-.7V6.8q0-.35-.225-.575Q16.25 6 15.9 6H8.65l-.7-.7h7.95q.65 0 1.075.425.425.425.425 1.075v4.7l2.1-2.1q.175-.175.413-.088.237.088.237.338v4.7q0 .25-.237.338-.238.087-.413-.088Zm-.7 5.4L3.2 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.6 15.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-6.125-9.975ZM10.75 11.95Zm-5.6-6.6L5.8 6h-.3q-.35 0-.575.225Q4.7 6.45 4.7 6.8v10.4q0 .35.225.575Q5.15 18 5.5 18h10.4q.35 0 .575-.225.225-.225.225-.575v-.3l.65.65q-.125.5-.513.825-.387.325-.937.325H5.5q-.65 0-1.075-.425Q4 17.85 4 17.2V6.8q0-.55.325-.938.325-.387.825-.512Zm2.375 9.75v-.05q0-.7.888-1.175.887-.475 2.212-.475 1.325 0 2.213.475.887.475.887 1.175v.05Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100.displayName = 'AmauiIconMaterialVideoCameraFrontOffW100';

export default IconMaterialVideoCameraFrontOffW100;
