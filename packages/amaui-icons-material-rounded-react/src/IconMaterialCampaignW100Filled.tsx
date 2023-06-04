import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampaignW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignW100Filled'

      short_name='Campaign'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.25 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.425 6.1-1.825-1.375q-.125-.1-.15-.238-.025-.137.075-.262t.238-.15q.137-.025.262.075l1.825 1.375q.125.1.15.238.025.137-.075.262t-.237.15q-.138.025-.263-.075Zm-1.5-11.05q-.125.1-.262.075-.138-.025-.238-.15-.1-.125-.075-.263.025-.137.15-.237l1.825-1.375q.125-.1.262-.075.138.025.238.15.1.125.075.262-.025.138-.15.238ZM5.65 17.65V13.9H4.6q-.625 0-1.062-.438Q3.1 13.025 3.1 12.4v-.8q0-.625.438-1.063.437-.437 1.062-.437h3.65l2.525-1.475q.375-.225.75-.013.375.213.375.638v5.5q0 .425-.375.637-.375.213-.75-.012L8.25 13.9h-1.9v3.75Zm8.25-2.9v-5.5q.45.425.725 1.15.275.725.275 1.6 0 .875-.275 1.6-.275.725-.725 1.15Z"/>
    </Icon>
  );
});

IconMaterialCampaignW100Filled.displayName = 'AmauiIconMaterialCampaignW100Filled';

export default IconMaterialCampaignW100Filled;
