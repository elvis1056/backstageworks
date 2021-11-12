import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../GlobalContext';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import styled from 'styled-components';
import { theme } from 'theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledToggleButton = styled.a`
  .open & {
    background-color: ${theme.themePageHeaderPrimaryHover} !important;
  }
  &:hover {
    background-color: ${theme.themePageHeaderPrimaryHover} !important;
  }
`;

export default function SwitchLangButton({ setIsNotifycationDropdownOpen }) {

  const { i18n } = useTranslation();
  const { locale, setLocale } = useContext(GlobalContext);

  useEffect(() => {
    const cookiesLang = cookies.get('lang');
    if (!cookiesLang) return;
    i18n.changeLanguage(cookiesLang);
    setLocale(cookiesLang);
  }, []);

  const switchLang = data => {
    i18n.changeLanguage(data);
    setLocale(data);
    cookies.set('lang', data, { path: '/' });
  };

  const langs = [
    {
      key: 'en',
      text: 'English'
    },
    {
      key: 'zh-TW',
      text: '繁體中文'
    },
    {
      key: 'zh-CN',
      text: '简体中文'
    },
    {
      key: 'jp',
      text: '日本語'
    }
  ]

  const currentLang = () => {
    const find = langs.find(lang => lang.key === locale)
    return find ? find.text : 'English'

  }

  return (
    <li className="dropdown">
      <StyledToggleButton
        className="dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        onClick={() => setIsNotifycationDropdownOpen(false)}
      >
        <i
          className="fas fa-globe-americas"
          style={{ marginRight: 5 }}
        />
        <span className="hidden-sm hidden-xs">
          {currentLang()}
        </span>
      </StyledToggleButton>
      <ul className="dropdown-menu">
        {
          langs.map(item => (
            <li key={item.key}>
              <a
                href="#"
                onClick={() => {
                  switchLang(item.key)
                }}
              >
                {
                  locale === item.key ?
                    <FontAwesomeIcon
                      icon={locale === item.key ? 'check' : ''}
                    />
                    :
                    <svg height="16px" />
                }
                {item.text}
              </a>
            </li>
          ))
        }
      </ul>
    </li>
  );
}

SwitchLangButton.propTypes = {
  setIsNotifycationDropdownOpen: PropTypes.func
}
