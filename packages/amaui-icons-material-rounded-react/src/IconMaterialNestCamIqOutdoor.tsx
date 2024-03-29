import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamIqOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIqOutdoor'

      short_name='NestCamIqOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.4 20.6q-.2.025-.387-.038-.188-.062-.363-.187l-3.825-3.2Q7.55 16.1 7.013 14.6q-.538-1.5-.263-3.05l-1.4-1.175q-.15-.125-.225-.288-.075-.162-.1-.362-.025-.2.025-.388.05-.187.175-.337H4v2q0 .825-.587 1.412Q2.825 13 2 13V3q.825 0 1.413.587Q4 4.175 4 5v2h2.875l1.55-1.875q.125-.15.3-.238.175-.087.375-.112.2-.025.4.037.2.063.35.188l1.375 1.15q1.475-.55 3.063-.3 1.587.25 2.862 1.325l3.825 3.2q.15.125.237.3.088.175.113.375.025.2-.037.388-.063.187-.188.337l-7.025 8.475q-.125.15-.3.237-.175.088-.375.113Zm-.225-2.425 5.775-6.925-3.1-2.55q-1.075-.875-2.225-.913-1.15-.037-2.775.638l-1.525-1.25-1.925 2.3 1.5 1.25q-.35 1.525-.138 2.737.213 1.213 1.338 2.163Zm0-5.5Z"/>
    </Icon>
  );
});

IconMaterialNestCamIqOutdoor.displayName = 'AmauiIconMaterialNestCamIqOutdoor';

export default IconMaterialNestCamIqOutdoor;
