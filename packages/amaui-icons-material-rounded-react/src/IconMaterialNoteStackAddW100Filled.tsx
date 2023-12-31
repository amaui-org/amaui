import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteStackAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddW100Filled'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-192v-376q0-25.063 17.5-42.532Q367-628 392-628h376q24.75 0 42.375 17.625T828-568v241q0 12.444-5 23.722T810-284L676-150q-8 8-19.278 13-11.278 5-23.722 5H392q-24.75 0-42.375-17.625T332-192ZM133-692q-5-25 9.451-45.212Q156.901-757.424 182-762l370-65q25-5 45.212 9.451Q617.424-803.099 622-778l8 50H392q-66 0-113 47t-47 113v290q-13-6-22-17.5T198-322l-65-370Zm433 326v106q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975v-106h106q5.95 0 9.975-4.035 4.025-4.035 4.025-10T709.975-390q-4.025-4-9.975-4H594v-106q0-5.95-4.035-9.975-4.035-4.025-10-4.025T570-509.975q-4 4.025-4 9.975v106H460q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h106Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddW100Filled.displayName = 'AmauiIconMaterialNoteStackAddW100Filled';

export default IconMaterialNoteStackAddW100Filled;
