import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorResetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetW100'

      short_name='FormatColorReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.2 15.7-.55-.55q.2-.425.275-.925.075-.5.075-1.075 0-1.175-.438-2.25-.437-1.075-1.312-1.9L12 4.8 9.6 7.15l-.5-.5L12 3.8l4.75 4.65q.875.825 1.413 2.137.537 1.313.537 2.563 0 .6-.113 1.237-.112.638-.387 1.313Zm1.7 5.2-3.15-3.15q-.825.9-2.112 1.425Q13.35 19.7 12 19.7q-2.8 0-4.75-1.912Q5.3 15.875 5.3 13.15q0-1.425.588-2.662Q6.475 9.25 7.35 8.35l-4.1-4.1.5-.5L20.4 20.4ZM12 19q1.4 0 2.525-.538 1.125-.537 1.725-1.212l-8.4-8.4q-.725.725-1.288 1.838Q6 11.8 6 13.15q0 2.45 1.75 4.15Q9.5 19 12 19Zm0-6Zm1.65-1.825Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100.displayName = 'AmauiIconMaterialFormatColorResetW100';

export default IconMaterialFormatColorResetW100;
