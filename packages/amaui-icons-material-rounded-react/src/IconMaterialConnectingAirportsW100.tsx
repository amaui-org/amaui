import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectingAirportsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirportsW100'

      short_name='ConnectingAirports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.95 21q-.05 0-.1-.025t-.075-.075l-2.55-4.3H10q-.25 0-.425-.175T9.4 16q0-.25.175-.425T10 15.4h3.225l2.55-4.3q.025-.05.075-.075.05-.025.1-.025.1 0 .137.062.038.063.013.163L14.875 15.4h3.575l.7-.95q.025-.025.05-.038.025-.012.075-.012.075 0 .113.05.037.05.012.125L18.975 16l.425 1.425q.025.075-.012.125-.038.05-.113.05-.05 0-.075-.013-.025-.012-.05-.037l-.7-.95h-3.575l1.225 4.175q.025.1-.013.163-.037.062-.137.062Zm-7.9-8q-.1 0-.138-.062-.037-.063-.012-.163L9.125 8.6H5.55l-.7.95q-.025.025-.05.037-.025.013-.075.013-.075 0-.112-.05-.038-.05-.013-.125L5.025 8 4.6 6.575q-.025-.075.013-.125.037-.05.112-.05.05 0 .075.012.025.013.05.038l.7.95h3.575L7.9 3.225q-.025-.1.025-.163Q7.975 3 8.05 3q.05 0 .1.025t.075.075l2.55 4.3H14q.25 0 .425.175T14.6 8q0 .25-.175.425T14 8.6h-3.225l-2.55 4.3q-.025.05-.075.075-.05.025-.1.025Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirportsW100.displayName = 'AmauiIconMaterialConnectingAirportsW100';

export default IconMaterialConnectingAirportsW100;
