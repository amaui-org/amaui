import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRefresh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Refresh'

      short_name='Refresh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q1.725 0 3.3.713 1.575.712 2.7 2.037V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v5q0 .425-.288.712Q19.425 11 19 11h-5q-.425 0-.712-.288Q13 10.425 13 10t.288-.713Q13.575 9 14 9h3.2q-.8-1.4-2.187-2.2Q13.625 6 12 6 9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.725 0 3.188-.913 1.462-.912 2.187-2.437.125-.275.413-.462.287-.188.587-.188.575 0 .863.4.287.4.062.9-.95 2.125-2.925 3.412Q14.4 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRefresh.displayName = 'AmauiIconMaterialRefresh';

export default IconMaterialRefresh;
