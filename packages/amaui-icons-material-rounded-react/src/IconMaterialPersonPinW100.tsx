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
      <path d="M12 20.85q-.15 0-.275-.05-.125-.05-.25-.175L9.55 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425h-3.75l-1.925 1.925q-.125.125-.25.175-.125.05-.275.05Zm-7-3.5q1.35-1.325 3.138-2.088Q9.925 14.5 12 14.5t3.863.762q1.787.763 3.137 2.088V4.8q0-.3-.25-.55Q18.5 4 18.2 4H5.8q-.3 0-.55.25Q5 4.5 5 4.8Zm7-5.25q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 6.4q-1.2 0-2.025.825T9.15 9.25q0 1.2.825 2.025T12 12.1Zm0-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.513Q11.125 7.1 12 7.1t1.512.637q.638.638.638 1.513 0 .875-.638 1.512-.637.638-1.512.638Zm0 8.75L14.15 18h4.3v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.638-1.65.637-3.075 1.962v.2h4.3Zm0-9.475Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100.displayName = 'AmauiIconMaterialPersonPinW100';

export default IconMaterialPersonPinW100;
