import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseFilled'

      short_name='ShieldWithHouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.425 13.875 12 9.525l5.575 4.35q.175-.55.262-1.1.088-.55.138-1.125l-4.75-3.7q-.55-.425-1.225-.425t-1.225.425l-4.75 3.7q.05.575.137 1.125.088.55.263 1.1ZM12 19.9q.525-.175 1.025-.425.5-.25.975-.575V16q0-.425-.287-.713Q13.425 15 13 15h-2q-.425 0-.712.287Q10 15.575 10 16v2.9q.475.325.975.575.5.25 1.025.425Zm0 2.025h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseFilled.displayName = 'AmauiIconMaterialShieldWithHouseFilled';

export default IconMaterialShieldWithHouseFilled;
