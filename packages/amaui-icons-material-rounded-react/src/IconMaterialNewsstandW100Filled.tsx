import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsstandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsstandW100Filled'

      short_name='Newsstand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-192q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h720q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975-196q-4.025 4-9.975 4H120Zm97.965-148Q212-340 208-344.025T204-354v-240q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v240q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm148 0Q360-340 356-344.025T352-354v-400q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v400q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm148 0Q508-340 504-344.025T500-354v-400q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v400q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm241.954-6.776Q751-344 745.366-345.565 739.732-347.13 737-352L617-562q-3-5-1.419-10.724 1.581-5.725 6.5-8.5Q627-584 632.634-582.435 638.268-580.87 641-576l120 210q3 5 1.419 10.724-1.581 5.725-6.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialNewsstandW100Filled.displayName = 'AmauiIconMaterialNewsstandW100Filled';

export default IconMaterialNewsstandW100Filled;
