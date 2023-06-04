import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathroomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathroomW100Filled'

      short_name='Bathroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4Zm5.7-3q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-6-3q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-7.2-3.5h8.4V11q0-1.725-1.237-2.963Q13.725 6.8 12 6.8T9.038 8.037Q7.8 9.275 7.8 11Z"/>
    </Icon>
  );
});

IconMaterialBathroomW100Filled.displayName = 'AmauiIconMaterialBathroomW100Filled';

export default IconMaterialBathroomW100Filled;
