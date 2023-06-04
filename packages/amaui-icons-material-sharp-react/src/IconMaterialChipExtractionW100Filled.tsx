import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipExtractionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionW100Filled'

      short_name='ChipExtraction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6V5Q9.075 5 7.038 7.037 5 9.075 5 12q0 2.925 2.038 4.962Q9.075 19 12 19Zm4-3.625-.5-.5 3.25-3.225h-9.1v-.7h9.075L15.5 8.4l.5-.475L20.075 12Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionW100Filled.displayName = 'AmauiIconMaterialChipExtractionW100Filled';

export default IconMaterialChipExtractionW100Filled;
