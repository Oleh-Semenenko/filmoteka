const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

import * as images from './team-images-import';
import svg from '../images/symbol-defs.svg';
import { showModal, closeModal } from './stop-scrol-when-modal-open';

export default async function openTeamModalOnClick() {

  const teamMarkup = basicLightbox.create(
    `<div class="team-modal modal">
    <button type="button" class="modal__close-btn">
            <svg class="modal__icon" width="14" height="14">
                <use href="${svg}#icon-close-black"></use>
            </svg>
    </button>
    <ul class="team-list list">
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_oleh_desk_1x} 1x, ${images.img_oleh_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_oleh_tab_1x} 1x, ${images.img_oleh_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_oleh_mob_1x} 1x, ${images.img_oleh_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_oleh_desk_1x}"
            alt="Олег Семененко"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Олег Семененко</h3>
          <p class="team-position">Team Lead</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_eugen_desk_1x} 1x, ${images.img_eugen_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_eugen_tab_1x} 1x, ${images.img_eugen_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_eugen_mob_1x} 1x, ${images.img_eugen_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_eugen_desk_1x}"
            alt="Євген Сидоров"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Євген Сидоров</h3>
          <p class="team-position">Scrum Master</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_ivan_desk_1x} 1x, ${images.img_ivan_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_ivan_tab_1x} 1x, ${images.img_ivan_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_ivan_mob_1x} 1x, ${images.img_ivan_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_ivan_desk_1x}"
            alt="Іван Довгопол"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Іван Довгопол</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_olga_desk_1x} 1x, ${images.img_olga_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_olga_tab_1x} 1x, ${images.img_olga_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_olga_mob_1x} 1x, ${images.img_olga_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_olga_desk_1x}"
            alt="Ольга Громова"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Ольга Громова</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_vadim_desk_1x} 1x, ${images.img_vadim_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_vadim_tab_1x} 1x, ${images.img_vadim_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_vadim_mob_1x} 1x, ${images.img_vadim_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_vadim_desk_1x}"
            alt="Вадим Чутур"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Вадим Чутур</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_dmytro_s_desk_1x} 1x, ${images.img_dmytro_s_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_dmytro_s_tab_1x} 1x, ${images.img_dmytro_s_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_dmytro_s_mob_1x} 1x, ${images.img_dmytro_s_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_dmytro_s_desk_1x}"
            alt="Дмитро Садковський"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Дмитро Садковський</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_iryna_desk_1x} 1x, ${images.img_iryna_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_iryna_tab_1x} 1x, ${images.img_iryna_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_iryna_mob_1x} 1x, ${images.img_iryna_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_iryna_desk_1x}"
            alt="Ірина Бондаренко"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Ірина Бондаренко</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_dmytro_p_desk_1x} 1x, ${images.img_dmytro_p_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_dmytro_p_tab_1x} 1x, ${images.img_dmytro_p_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_dmytro_p_mob_1x} 1x, ${images.img_dmytro_p_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_dmytro_p_desk_1x}"
            alt="Дмитро Пушкаренко"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Дмитро Пушкаренко</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_oleksandr_desk_1x} 1x, ${images.img_oleksandr_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_oleksandr_tab_1x} 1x, ${images.img_oleksandr_tab_2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_oleksandr_mob_1x} 1x, ${images.img_oleksandr_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_oleksandr_desk_1x}"
            alt="Олександр Костан"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Олександр Костан</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_andriy_desk_1x} 1x, ${images.img_andriy_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            ${images.img_andriy_tab_1x} 1x, ${images.img_andriy_tab_2x} 2x"
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_andriy_mob_1x} 1x, ${images.img_andriy_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_andriy_desk_1x}"
            alt="Андрій Юрченко"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Андрій Юрченко</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
      <li class="team-item">
        <picture class="team-picture">
          <source
            srcset="
              ${images.img_vlad_desk_1x} 1x, ${images.img_vlad_desk_2x} 2x
            "
            media="(min-width: 1200px)"
          />
          <source
            srcset="
              ${images.img_vlad_tab_1x} 1x, ${images.img_vlad_tab_2x} 2x"
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${images.img_vlad_mob_1x} 1x, ${images.img_vlad_mob_2x} 2x
            "
            media="(min-width: 320px)"
          />
          <img
            src="${images.img_vlad_desk_1x}"
            alt="Владислав Федченко"
            class="team-img"
            width="290"
          />
          <h3 class="team-title">Владислав Федченко</h3>
          <p class="team-position">Frontend developer</p>
        </picture>
      </li>
    </ul>
    </div>`,
    {
      onShow: teamMarkup => {
        showModal();
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, teamMarkup)
        );
        const closeBtn = teamMarkup.element().querySelector('.modal__close-btn');
        closeBtn.addEventListener('click', e => teamMarkup.close());
      },
      onClose: teamMarkup => {
        closeModal();
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, teamMarkup)
        );
      },
    }
  );
  console.log(teamMarkup);
  teamMarkup.show();
}

function closeKeyDownKeyEsc(e, teamMarkup) {
  if (e.code === 'Escape') {
    teamMarkup.close();
  }
}
