import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppMaybeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeFilled'

      short_name='GppMaybe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q.425 0 .713-.288Q13 11.425 13 11V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3q0 .425.288.712.287.288.712.288Zm0 4q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm0 5.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeFilled.displayName = 'AmauiIconMaterialGppMaybeFilled';

export default IconMaterialGppMaybeFilled;
