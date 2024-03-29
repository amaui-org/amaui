import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedSquiggleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedSquiggleFilled'

      short_name='FormatUnderlinedSquiggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.325 21q-.375 0-.788-.15-.412-.15-.712-.35-.2-.125-.4-.312Q5.225 20 5 20H4v-2h1q.375 0 .787.15.413.15.713.35.2.125.4.312.2.188.425.188.25 0 .45-.188.2-.187.4-.312.3-.225.712-.363Q9.3 18 9.675 18q.375 0 .788.137.412.138.712.363.2.125.387.312Q11.75 19 12 19t.45-.188q.2-.187.4-.312.3-.225.712-.363.413-.137.788-.137.35 0 .775.15.425.15.725.35.2.125.4.312.2.188.45.188t.437-.188q.188-.187.388-.312.3-.2.713-.35.412-.15.787-.15h1v2h-1q-.25 0-.45.188-.2.187-.4.312-.3.2-.725.35-.425.15-.8.15-.35 0-.762-.15-.413-.15-.713-.35-.2-.125-.4-.312-.2-.188-.45-.188t-.45.188q-.2.187-.4.312-.3.225-.712.363-.413.137-.788.137-.375 0-.787-.137-.413-.138-.713-.363-.2-.125-.387-.312Q9.9 20 9.65 20q-.225 0-.437.188-.213.187-.413.312-.275.225-.7.363-.425.137-.775.137ZM12 16.5q-2.525 0-4.263-1.738Q6 13.025 6 10.5v-8h2.5v8q0 1.475 1.012 2.488Q10.525 14 12 14t2.488-1.012Q15.5 11.975 15.5 10.5v-8H18v8q0 2.525-1.738 4.262Q14.525 16.5 12 16.5Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedSquiggleFilled.displayName = 'AmauiIconMaterialFormatUnderlinedSquiggleFilled';

export default IconMaterialFormatUnderlinedSquiggleFilled;
