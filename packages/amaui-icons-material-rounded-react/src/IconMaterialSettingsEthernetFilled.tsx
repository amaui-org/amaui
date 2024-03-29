import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsEthernetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernetFilled'

      short_name='SettingsEthernet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.675 17.325q-.275.275-.687.262-.413-.012-.688-.287-.275-.275-.275-.688 0-.412.275-.712l3.85-3.9-3.875-3.925Q16 7.8 16.013 7.387q.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l4.6 4.6q.275.275.275.7 0 .425-.275.7ZM6.3 17.3l-4.6-4.6q-.275-.275-.275-.7 0-.425.275-.7l4.625-4.625q.275-.275.688-.263.412.013.687.288.275.275.275.687 0 .413-.275.713L3.85 12l3.875 3.925q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275ZM8 13q-.425 0-.713-.288Q7 12.425 7 12t.287-.713Q7.575 11 8 11t.713.287Q9 11.575 9 12t-.287.712Q8.425 13 8 13Zm4 0q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm4 0q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11t.712.287Q17 11.575 17 12t-.288.712Q16.425 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernetFilled.displayName = 'AmauiIconMaterialSettingsEthernetFilled';

export default IconMaterialSettingsEthernetFilled;
