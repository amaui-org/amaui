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
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm4.2-3q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-6-3q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3 0q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm1-3.5q.075 0 .137-.063.063-.062.063-.137 0-1.725-1.237-2.963Q13.725 6.8 12 6.8T9.038 8.037Q7.8 9.275 7.8 11q0 .075.063.137.062.063.137.063Z"/>
    </Icon>
  );
});

IconMaterialBathroomW100Filled.displayName = 'AmauiIconMaterialBathroomW100Filled';

export default IconMaterialBathroomW100Filled;
