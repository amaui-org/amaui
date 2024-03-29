import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabled'

      short_name='SyncDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.1 21.875-3.025-3q-.15.125-.337.212-.188.088-.363.163-.475.225-.925-.012Q14 19 14 18.275q0-.275.163-.513.162-.237.437-.362l-8-8q-.275.625-.438 1.288Q6 11.35 6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20H5q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.75l-.4-.35q-1.225-1.225-1.788-2.662Q4 13.55 4 12.05q0-1.125.287-2.163.288-1.037.838-1.962L2.1 4.9q-.275-.275-.275-.7 0-.425.3-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3Zm-.175-5.85-1.5-1.5q.275-.6.425-1.25.15-.65.15-1.325 0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 1.125-.288 2.137-.287 1.013-.787 1.938Zm-9.45-9.45-1.5-1.5Q8.1 5 8.287 4.9q.188-.1.338-.15.5-.225.937.037.438.263.438.938 0 .275-.137.488-.138.212-.388.362Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabled.displayName = 'AmauiIconMaterialSyncDisabled';

export default IconMaterialSyncDisabled;
