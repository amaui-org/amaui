import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSplitW100'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M726-214 548-392q-4-4-4.5-9.5T548-412q5-5 10-5t10 5l178 178v-126q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v144q0 12.75-8.625 21.375T744-186H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h126ZM476-494l250-252H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h144q12.75 0 21.375 8.625T774-744v144q0 5.95-4.035 9.975-4.035 4.025-10 4.025T750-590.025q-4-4.025-4-9.975v-126L506-484q-8 8-19.278 13-11.278 5-23.722 5H200q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h276Z"/>
    </Icon>
  );
});

IconMaterialArrowSplitW100.displayName = 'AmauiIconMaterialArrowSplitW100';

export default IconMaterialArrowSplitW100;
