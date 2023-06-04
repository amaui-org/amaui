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
      <path d="M5 12q0 2.8 1.888 4.787 1.887 1.988 4.662 2.188.15.025.262.125.113.1.113.25t-.113.25q-.112.1-.287.075-3.05-.2-5.138-2.4Q4.3 15.075 4.3 12q0-3.025 2.038-5.238Q8.375 4.55 11.4 4.325q.2-.025.35.062.15.088.15.263 0 .15-.1.25t-.25.125q-2.775.2-4.662 2.187Q5 9.2 5 12Zm13.75.35H10q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.725l-2.975-3q-.1-.1-.1-.238 0-.137.1-.237.1-.1.25-.1t.25.1l3.3 3.3q.225.225.225.525 0 .3-.225.525l-3.3 3.3q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionW100Filled.displayName = 'AmauiIconMaterialChipExtractionW100Filled';

export default IconMaterialChipExtractionW100Filled;
