import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTibiaAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaAltFilled'

      short_name='TibiaAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 22q-.4-1.175-.6-2.3-.2-1.125-.25-2.15-.05-1.025-.012-1.875.037-.85.112-1.45 0-.025 0 0-.55-.125-1.262-.313-.713-.187-1.526-.512-.812-.325-1.662-.788-.85-.462-1.675-1.112L9.05 3.025l6.425 2.925q1.6.725 2.563 2.2Q19 9.625 19 11.425V22Zm3.65-3.025q.225 0 .425-.1.2-.1.325-.25.15.15.35.25.2.1.4.1.425 0 .713-.287.287-.288.287-.713t-.287-.712q-.288-.288-.713-.288V13q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11q-.2 0-.4.087-.2.088-.35.238-.125-.15-.325-.238-.2-.087-.425-.087-.425 0-.712.287-.288.288-.288.713t.288.712q.287.288.712.288v3.975q-.425 0-.712.288-.288.287-.288.712t.288.713q.287.287.712.287Z"/>
    </Icon>
  );
});

IconMaterialTibiaAltFilled.displayName = 'AmauiIconMaterialTibiaAltFilled';

export default IconMaterialTibiaAltFilled;
