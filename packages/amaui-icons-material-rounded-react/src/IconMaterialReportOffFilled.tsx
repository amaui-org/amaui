import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffFilled'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.1 21q-.4 0-.762-.15-.363-.15-.638-.45l-4.1-4.125q-.275-.275-.425-.638-.15-.362-.15-.762v-5.8q0-.4.15-.763.15-.362.425-.637l.625-.625L1.4 4.175Q1.125 3.9 1.125 3.5t.3-.7q.275-.275.7-.275.425 0 .7.275L21.25 21.225q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-2.85-2.85-.6.625q-.3.3-.662.462-.363.163-.788.163Zm3.075-6h-.15q-.425 0-.713.287-.287.288-.287.713t.287.712q.288.288.713.288t.713-.288q.287-.287.287-.712v-.15Zm7.65 1.95.65-.675q.275-.275.413-.638.137-.362.137-.737V9.075q0-.4-.15-.763-.15-.362-.425-.637l-4.1-4.1q-.275-.275-.637-.425Q15.35 3 14.95 3H9.1q-.4 0-.762.15-.363.15-.638.425l-.625.625 3.95 4V8q0-.425.287-.713Q11.6 7 12.025 7t.713.287q.287.288.287.713v2.2Z"/>
    </Icon>
  );
});

IconMaterialReportOffFilled.displayName = 'AmauiIconMaterialReportOffFilled';

export default IconMaterialReportOffFilled;
