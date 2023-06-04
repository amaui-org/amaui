import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirW100'

      short_name='Air'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 19.05q-.8 0-1.412-.488-.613-.487-.838-1.212H10q.2.45.6.725.4.275.9.275.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163q-.488-.487-1.163-.487H2.65v-.7h8.85q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687Zm-8.85-9.4v-.7H15.5q.9 0 1.525-.625.625-.625.625-1.525 0-.9-.625-1.525Q16.4 4.65 15.5 4.65q-.75 0-1.3.425t-.75 1.075h-.75q.225-.975 1-1.588.775-.612 1.8-.612 1.2 0 2.025.825T18.35 6.8q0 1.2-.825 2.025T15.5 9.65Zm16.5 7.65v-.75q.65-.2 1.075-.75.425-.55.425-1.3 0-.9-.625-1.525-.625-.625-1.525-.625H2.65v-.7H18.5q1.2 0 2.025.825t.825 2.025q0 1.025-.612 1.8-.613.775-1.588 1Z"/>
    </Icon>
  );
});

IconMaterialAirW100.displayName = 'AmauiIconMaterialAirW100';

export default IconMaterialAirW100;
