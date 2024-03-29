import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Label'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.825.587-1.412Q4.175 5 5 5h10q.5 0 .938.225.437.225.712.625l3.525 5q.35.525.35 1.15 0 .625-.35 1.15l-3.525 5q-.275.4-.712.625Q15.5 19 15 19Zm13.55-7L15 7H5v10h10ZM5 12v5V7Z"/>
    </Icon>
  );
});

IconMaterialLabel.displayName = 'AmauiIconMaterialLabel';

export default IconMaterialLabel;
