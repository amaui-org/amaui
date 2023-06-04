import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinW100'

      short_name='PersonPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3h15.4v15.4h-5.25Zm-7-3.8q1.35-1.325 3.138-2.088Q9.925 14.5 12 14.5t3.863.762q1.787.763 3.137 2.088V4H5Zm7-5.25q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 6.4q-1.2 0-2.025.825T9.15 9.25q0 1.2.825 2.025T12 12.1Zm0-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.513Q11.125 7.1 12 7.1t1.512.637q.638.638.638 1.513 0 .875-.638 1.512-.637.638-1.512.638Zm0 8.75L14.15 18h4.3v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.638-1.65.637-3.075 1.962v.2h4.3Zm0-9.475Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100.displayName = 'AmauiIconMaterialPersonPinW100';

export default IconMaterialPersonPinW100;
