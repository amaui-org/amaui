import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1'

      short_name='ExposurePlus1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-.425 0-.713-.288Q6 16.425 6 16v-2H4q-.425 0-.712-.288Q3 13.425 3 13t.288-.713Q3.575 12 4 12h2v-2q0-.425.287-.713Q6.575 9 7 9t.713.287Q8 9.575 8 10v2h2q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 14 10 14H8v2q0 .425-.287.712Q7.425 17 7 17Zm9.875 2q-.475 0-.8-.325-.325-.325-.325-.8V8.05L14.3 9.1q-.35.275-.762.187-.413-.087-.663-.462-.25-.35-.162-.788.087-.437.437-.687l2.45-1.775q.35-.25.838-.263.487-.012.837.188.3.175.513.55.212.375.212.725v11.1q0 .475-.325.8-.325.325-.8.325Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1.displayName = 'AmauiIconMaterialExposurePlus1';

export default IconMaterialExposurePlus1;
