import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothSearching = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearching'

      short_name='BluetoothSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.85 13.625 14.6 12.35q-.15-.15-.15-.35 0-.2.15-.35l1.25-1.25q.3-.3.613-.225.312.075.412.475.1.35.138.675.037.325.037.675 0 .35-.037.7-.038.35-.138.7-.1.4-.412.462-.313.063-.613-.237Zm2.825 2.8q-.175-.175-.225-.45-.05-.275.075-.5.375-.8.575-1.688.2-.887.2-1.787 0-.9-.2-1.775-.2-.875-.575-1.675-.125-.25-.075-.525t.25-.475q.35-.35.775-.25.425.1.625.575.45.975.675 2.012Q21 10.925 21 12t-.237 2.1q-.238 1.025-.663 1.975-.2.475-.637.588-.438.112-.788-.238ZM9 14.4l-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7L8.6 12 3.7 7.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275L9 9.6V3.425q0-.425.262-.7.263-.275.663-.275.25 0 .5.112.25.113.45.313L15 7q.15.15.213.325.062.175.062.375t-.062.375Q15.15 8.25 15 8.4L11.4 12l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375Q15.15 16.85 15 17l-4.125 4.125q-.2.2-.45.313-.25.112-.5.112-.4 0-.663-.275Q9 21 9 20.575Zm2-4.8 1.9-1.9L11 5.85Zm0 8.55 1.9-1.85-1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearching.displayName = 'AmauiIconMaterialBluetoothSearching';

export default IconMaterialBluetoothSearching;
