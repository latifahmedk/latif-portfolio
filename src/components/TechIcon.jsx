import React from 'react';
import { 
  SiPython, 
  SiJavascript, 
  SiCplusplus, 
  SiDjango, 
  SiReact, 
  SiAngular, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiSqlite, 
  SiGitlab, 
  SiJira, 
  SiGithub, 
  SiPostman, 
  SiGooglecloud, 
  SiLeetcode 
} from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { TbDatabase } from 'react-icons/tb';
import { 
  FaCubes, 
  FaBrain, 
  FaNetworkWired, 
  FaKey, 
  FaComments, 
  FaLinkedin 
} from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import { Code, Terminal, Layers, Database, Cpu } from 'lucide-react';

const iconCatalog = {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiDjango,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGitlab,
  SiJira,
  SiGithub,
  SiPostman,
  SiGooglecloud,
  SiLeetcode,
  GrOracle,
  TbDatabase,
  FaCubes,
  FaBrain,
  FaNetworkWired,
  FaKey,
  FaComments,
  FaLinkedin,
  VscAzureDevops,
};

export default function TechIcon({ name, className = "w-6 h-6", style = {} }) {
  if (!name) return <Code className={className} style={style} />;

  if (iconCatalog[name]) {
    const IconComponent = iconCatalog[name];
    return <IconComponent className={className} style={style} />;
  }

  // Keyword fallbacks
  const lower = name.toLowerCase();
  if (lower.includes('database') || lower.includes('sql') || lower.includes('data')) {
    return <Database className={className} style={style} />;
  }
  if (lower.includes('terminal') || lower.includes('api')) {
    return <Terminal className={className} style={style} />;
  }
  if (lower.includes('framework') || lower.includes('stack')) {
    return <Layers className={className} style={style} />;
  }
  if (lower.includes('ai') || lower.includes('brain')) {
    return <Cpu className={className} style={style} />;
  }

  return <Code className={className} style={style} />;
}
